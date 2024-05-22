package servlet;

import com.google.gson.Gson;
import exception.URLException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.URL;
import model.User;
import repository.URLRepository;
import repository.UserRepository;
import validator.URLValidator;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(name = "URLServlet", urlPatterns = {"/URL/*"})
public class URLServlet extends HttpServlet {
    private UserRepository userRepository;
    private URLRepository URLRepository;
    private Gson gson;

    @Override
    public void init() {
        this.userRepository = new UserRepository();
        this.URLRepository = new URLRepository();
        this.gson = new Gson();
    }

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
//        String authHeader = req.getHeader("Authorization");
//        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
//            resp.sendError(HttpServletResponse.SC_UNAUTHORIZED);
//            return;
//        }
//
//        String token = authHeader.substring("Bearer ".length());
//
//        String id = JwtUtil.verifyToken(token);
//        if (id == null) {
//            resp.sendError(HttpServletResponse.SC_UNAUTHORIZED);
//            return;
//        }
//
//        req.setAttribute("id", id);

        super.service(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String pathInfo = req.getPathInfo();
        PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        // If the path is /, return all URLs
        if (pathInfo == null || pathInfo.equals("/")) {
            List<URL> URLs = URLRepository.getURLs();
            URLs.forEach(URL -> {
                URL.getUser().setPassword(null);
                URL.getUser().setSalt(null);
                URL.getUser().setURLs(null);
            });
            String URLsJsonString = this.gson.toJson(URLs);
            out.print(URLsJsonString);
        } else if (pathInfo.startsWith("/topN/")) {
//            get the number N from the request
            String[] splits = pathInfo.split("/");
            int n = Integer.parseInt(splits[2]);


            List<URL> URLs = URLRepository.getURLsByPopularity(n);
            URLs.forEach(URL -> {
                URL.getUser().setPassword(null);
                URL.getUser().setSalt(null);
                URL.getUser().setURLs(null);
            });
            String URLsJsonString = this.gson.toJson(URLs);
            out.print(URLsJsonString);
        } else {
            String[] splits = pathInfo.split("/");
            // If the path is /{URLId}, return the URL with the given ID
            if (splits.length == 2) {
                String URLId = splits[1];
                URL URL = URLRepository.getURLById(URLId);
                // If the URL is not found, return a not found status
                if (URL == null) {
                    resp.sendError(HttpServletResponse.SC_NOT_FOUND);
                    return;
                }
                String URLJsonString = this.gson.toJson(URL);
                out.print(URLJsonString);
            }
            // If the path is /user/{userId}, return all URLs by the user with the given ID
            else if (splits.length == 3 && splits[1].equals("user")) {
                String userId = splits[2];
                String URLsJsonString = this.gson.toJson(URLRepository.getURLsByUserId(userId));
                out.print(URLsJsonString);
            }
            // Otherwise, return a bad request status
            else {
                resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
                return;
            }
        }
        out.flush();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String pathInfo = req.getPathInfo();
        URL URL = this.gson.fromJson(req.getReader(), URL.class);
        String[] splits = pathInfo.split("/");
        String id = splits[1];
        System.out.println("URLServlet - doPost - id: " + id);
        URL.setUser(userRepository.getUserById(id));
        URLRepository.saveURL(URL);
        resp.setStatus(HttpServletResponse.SC_CREATED);
        URL addedURL = URLRepository.getURLById(URL.getIdString());

        // stop the infinite loop
        addedURL.getUser().setURLs(null);

        String URLJsonString = this.gson.toJson(addedURL);
        PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(URLJsonString);
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        URL URL = this.gson.fromJson(req.getReader(), URL.class);
        String id = (String) req.getAttribute("id");

        if (!URL.getUser().getIdString().equals(id)) {
            resp.sendError(HttpServletResponse.SC_FORBIDDEN);
            return;
        }

        try {
            URLValidator.validateURL(URL);
        } catch (URLException e) {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST, e.getMessage());
            return;
        }

        URL URLFound = URLRepository.getURLById(URL.getIdString());
        if (URLFound == null) {
            resp.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        URLRepository.updateURL(URL);
        resp.setStatus(HttpServletResponse.SC_OK);
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String pathInfo = req.getPathInfo();
        String[] splits = pathInfo.split("/");
        if (splits.length != 2) {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        String URLId = splits[1];
        URL URL = URLRepository.getURLById(URLId);
        if (URL == null) {
            resp.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

//        String idAttr = (String) req.getAttribute("id");
        String idAttr = "1";
        User user = userRepository.getUserById(idAttr);
        if (user == null) {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        if (!URL.getUser().getIdString().equals(user.getIdString())) {
            resp.sendError(HttpServletResponse.SC_FORBIDDEN);
            return;
        }

        URLRepository.deleteURL(URLId);
        resp.setStatus(HttpServletResponse.SC_OK);
    }
}