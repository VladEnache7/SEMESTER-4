//import model.URL;
//import repository.URLRepository;
//
//import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.util.List;
//
//@WebServlet(name = "IndexServlet", urlPatterns = {""})
//public class IndexServlet extends HttpServlet {
//    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        URLRepository urlRepository = new URLRepository();
//        List<URL> topURLs = urlRepository.getURLsByPopularity(10);
//        request.setAttribute("topURLs", topURLs);
//        request.getRequestDispatcher("/index.jsp").forward(request, response);
//    }
//}