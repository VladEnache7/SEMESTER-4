using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks; 
using Microsoft.AspNetCore.Mvc;
using Lab9___ASP.NET.Models;
using Lab9___ASP.NET.DB;
using crypto;
using System.Globalization;
using Org.BouncyCastle.Asn1.Ocsp;
using MySql.Data.MySqlClient;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Lab9___ASP.NET.Controllers
{
    public class MainController : Controller
    {
        // GET: /<controller>/
        public ActionResult Home()
        {
            string? username = HttpContext.Session.GetString("username");
            if (username == null)
                return RedirectToAction("Login");
            ViewBag.Username = username;
            if (HttpContext.Session.GetString("username") == null)
                return RedirectToAction("Login");
            return View("Home");  
        }

        public string Test()
        {
            return "It's working";
        }

        public ActionResult ViewAllNews()
        {
            DbManager db = new DbManager();
            if (HttpContext.Session.GetString("username") == null)
                return RedirectToAction("Login");
            return View("GetAllNews");
        }

        public ActionResult ViewMyNews()
        {
            DbManager db = new DbManager();
            if (HttpContext.Session.GetString("username") == null)
                return RedirectToAction("Login");
            return View("GetMyNews");
        }

        public ActionResult ViewAddNews()
        {
            if (HttpContext.Session.GetString("username") == null)
                return RedirectToAction("Login");
            return View("AddNews");
        }

        [HttpGet]
        public ActionResult Login()
        {
            return View("Login");
        }

        [HttpGet]
        public ActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Login");
        }

        public string GetAllNews()
        {
            DbManager db = new DbManager();
            List<News> newsList = db.GetAllNews();
            return PopulateTable(newsList);
        }

        public string GetMyNews()
        {
            DbManager db = new DbManager();
            string? username = HttpContext.Session.GetString("username");
            if (username == null)
                return "Please login first";
            List<News> newsList = db.GetMyNews(username);
            return PopulateTableWithMyNews(newsList);
        }

        [HttpPost]
        public ActionResult Login(string username)
        {
            DbManager db = new DbManager();
            string question = db.ValidateUser(username);
            if (question != "")
            {
                return RedirectToAction("ViewAuthenticate", new {question = question, username = username});
            }
            else
            {
                return RedirectToAction("Login");
            }
        }

        [HttpGet]
        public ActionResult ViewAuthenticate()
        {
            DbManager db = new DbManager();
            string username = Request.Query["username"];
            string question = Request.Query["question"];
            ViewBag.Username = username;
            ViewBag.Question = question;
            return View("Authenticate");
        }

        public ActionResult Authenticate()
        {

            DbManager db = new DbManager();
            string password = Request.Query["password"];
            string username = Request.Query["username"];
            Console.WriteLine(Request.QueryString);
            if (db.Authenticate(username, password))
            {
                HttpContext.Session.SetString("username", username);
                Console.WriteLine(username + " set");
                return RedirectToAction("Home");
            }
            return RedirectToAction("Login");

        }

        public ActionResult AddNews()
        {
            string? newsTitle = Request.Query["title"];
            string? newsCategory = Request.Query["category"];
            string? newsProducer = HttpContext.Session.GetString("username");
            string? newsContent = Request.Query["content"];
            Console.WriteLine(newsProducer);
            
            if (newsProducer == null)
            {
                return RedirectToAction("Login");
            }
            
            if (newsTitle == null || newsCategory == null || newsContent == null)
            {
                string errorNews = "Please fill in all the fields.";
                return RedirectToAction("Error", new { News = errorNews });
            }

            DbManager db = new DbManager();
            bool success = db.AddNews(newsTitle, newsCategory, newsContent, newsProducer);
            if (success)
            {
                return RedirectToAction("Home");
            }
            else
            {
                string errorNews = "Failed to add the News record.";
                return RedirectToAction("Error", new { News = errorNews });
            }

            return RedirectToAction("Home");
        }

        public string PopulateTable(List<News> newsList)
        {
            string result = "<thead><th>Title</th><th>Date</th><th>Category</th><th>Content</th><th>Producer</th></thead>";

            foreach (News news in newsList)
            {
                result += "<tr>";
                result += "<td>" + news.NewsTitle + "</td>";
                result += "<td>" + news.NewsDatePosted + "</td>";
                result += "<td>" + news.NewsCategory + "</td>";
                result += "<td>" + news.NewsContent + "</td>";
                result += "<td>" + news.NewsProducer + "</td>";
            }
            Console.WriteLine(result);
            return result;
        }
        
        public string PopulateTableWithMyNews(List<News> newsList)
        {
            string result = "<thead><th>Title</th><th>Date</th><th>Category</th><th>Content</th><th>Producer</th><th>Action</th></thead>";

            foreach (News news in newsList)
            {
                result += "<tr>";
                result += "<td>" + news.NewsTitle + "</td>";
                result += "<td>" + news.NewsDatePosted + "</td>";
                result += "<td>" + news.NewsCategory + "</td>";
                result += "<td>" + news.NewsContent + "</td>";
                result += "<td>" + news.NewsProducer + "</td>";
                result += "<td><button onclick=\"window.location.href='/Main/EditNews?id=" + news.NewsId + "'\">Edit</button></td>";
                result += "</tr>";
            }
            Console.WriteLine(result);
            return result;
        }

        public ActionResult Error(string News)
        {
            ViewBag.ErrorNews = News;
            return View("Error");
        }
        
        [HttpGet]
        public ActionResult EditNews(int id)
        {
            DbManager db = new DbManager();
            News news = db.GetNewsById(id); // You need to implement this method in your DbManager class

            if (news == null)
            {
                return NotFound(); // Returns a 404 Not Found response
            }

            return View(news); // Pass the news object to the view
        }
        
        [HttpPost]
        public ActionResult UpdateNews(int NewsId, string title, string category, string content)
        {
            DbManager db = new DbManager();
            bool success = db.UpdateNews(NewsId, title, category, content);

            if (success)
            {
                return RedirectToAction("Home"); // Redirect to the Home page if the update was successful
            }
            else
            {
                string errorNews = "Failed to update the News record.";
                return RedirectToAction("Error", new { News = errorNews }); // Redirect to the Error page if the update failed
            }
        }
    }
    
}

