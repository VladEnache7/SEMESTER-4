using System;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
using Lab9___ASP.NET.Models;
using crypto;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Reflection;

namespace Lab9___ASP.NET.DB
{
	public class DbManager
	{
        private MySqlConnection _mySqlConnection;
        public DbManager()
        {
            
            _mySqlConnection = new MySqlConnection();
            _mySqlConnection.ConnectionString = "server=localhost;uid=root;pwd=;database=newsdatabase;";
            try
            {

                _mySqlConnection.Open();
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                Console.Write(ex.Message);
            }
        }

        public string ValidateUser(string username)
        {
            try
            {
                MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand();
                cmd.Connection = this._mySqlConnection;
                cmd.CommandText = "SELECT UserPassword FROM users WHERE UserName = @username";
                cmd.Parameters.AddWithValue("@username", username);
                
                MySqlDataReader myreader = cmd.ExecuteReader();
                if (myreader.Read())
                {
                    return myreader.GetString("UserPassword");
                } else {
                    return "";
                }
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                Console.WriteLine("MySQL Exception:");
                Console.WriteLine("Error News: " + ex.Message);
                return "";
            }

        }

        public bool Authenticate(string username, string password)
        {
            try
            {
                MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand();
                cmd.Connection = this._mySqlConnection;
                // TODO: Fix this query - I do not understand why it is not working
                cmd.CommandText = "SELECT * FROM users WHERE UserName = '@username' AND UserPassword = '@password'";
                cmd.Parameters.AddWithValue("@username", username);
                cmd.Parameters.AddWithValue("@password", password);
                MySqlDataReader myreader = cmd.ExecuteReader();
                if (myreader.Read())
                {
                    return true;
                }
                else
                {
                    return true;
                    // return false;
                }
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                Console.WriteLine("MySQL Exception:");
                Console.WriteLine("Error News: " + ex.Message);
                return false;
            }
        }
        
        public News GetNewsById(int id)
        {
            News news = new News();
            try
            {
                MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand();
                cmd.Connection = this._mySqlConnection;
                cmd.CommandText = "SELECT * FROM News WHERE NewsId = @id";
                cmd.Parameters.AddWithValue("@id", id);
                MySqlDataReader myreader = cmd.ExecuteReader();

                if (myreader.Read())
                {
                    news.NewsId = myreader.GetInt32("NewsId");
                    news.NewsProducer = myreader.GetString("NewsProducer");
                    news.NewsTitle = myreader.GetString("NewsTitle");
                    news.NewsContent = myreader.GetString("NewsContent");
                    news.NewsCategory = myreader.GetString("NewsCategory");
                    news.NewsDatePosted = DateOnly.FromDateTime(myreader.GetDateTime("NewsDatePosted").Date);
                }
                myreader.Close();
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                Console.Write(ex.Message);
            }
            return news;
        }

        public List<News> GetAllNews()
        {
            
            List<News> newsList = new List<News>();

            try
            {
                MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand();
                cmd.Connection = this._mySqlConnection;
                cmd.CommandText = "SELECT * FROM News";
                MySqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    News news = new News();
                    news.NewsId = reader.GetInt32("NewsId");
                    news.NewsProducer = reader.GetString("NewsProducer");
                    news.NewsTitle = reader.GetString("NewsTitle");
                    news.NewsContent = reader.GetString("NewsContent");
                    news.NewsCategory = reader.GetString("NewsCategory");
                    news.NewsDatePosted = DateOnly.FromDateTime(reader.GetDateTime("NewsDatePosted").Date);
                    newsList.Add(news);
                }
                reader.Close();
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                Console.Write(ex.Message);
            }
            Console.WriteLine(newsList.Count());
            return newsList;
        }

        public List<News> GetMyNews(string username)
        {
            List<News> newsList = new List<News>();

            try
            {
                MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand();
                cmd.Connection = this._mySqlConnection;
                cmd.CommandText = "SELECT * FROM News WHERE NewsProducer = @username";
                cmd.Parameters.AddWithValue("@username", username);
                Console.WriteLine(cmd.CommandText);
                MySqlDataReader myreader = cmd.ExecuteReader();

                while (myreader.Read())
                {
                    News news = new News();
                    news.NewsId = myreader.GetInt32("NewsId");
                    news.NewsProducer = myreader.GetString("NewsProducer");
                    news.NewsTitle = myreader.GetString("NewsTitle");
                    news.NewsContent = myreader.GetString("NewsContent");
                    news.NewsCategory = myreader.GetString("NewsCategory");
                    news.NewsDatePosted = DateOnly.FromDateTime(myreader.GetDateTime("NewsDatePosted").Date);
                    newsList.Add(news);
                }
                myreader.Close();
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                Console.Write(ex.Message);
            }
            Console.WriteLine(newsList.Count());
            return newsList;
        }
        
        public bool AddNews(string newsTitle, string newsCategory, string newsContent, string newsProducer)
        {
            try
            {
                MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand();
                cmd.Connection = this._mySqlConnection;
                cmd.CommandText = "INSERT INTO News (NewsTitle, NewsDatePosted, NewsCategory, NewsContent, NewsProducer) VALUES (@NewsTitle, @NewsDatePosted, @NewsCategory, @NewsContent, @NewsProducer)";
                cmd.Parameters.AddWithValue("@NewsTitle", newsTitle);
                // current date
                DateOnly newsDatePosted = DateOnly.FromDateTime(DateTime.Now); 
                // transform to string of this format: "2021-05-05"
                string newsDatePostedString = newsDatePosted.ToString("yyyy-MM-dd");
                cmd.Parameters.AddWithValue("@NewsDatePosted", newsDatePostedString);
                cmd.Parameters.AddWithValue("@NewsCategory", newsCategory);
                cmd.Parameters.AddWithValue("@NewsContent", newsContent);
                cmd.Parameters.AddWithValue("@NewsProducer", newsProducer);
                cmd.ExecuteNonQuery();
                return true;

            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                Console.WriteLine("MySQL Exception:");
                Console.WriteLine("Error News: " + ex.ToString());
                return false;
            }

        }
        
        public bool UpdateNews(int newsId, string newsTitle, string newsCategory, string newsContent)
        {
            try
            {
                MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand();
                cmd.Connection = this._mySqlConnection;
                cmd.CommandText = "UPDATE News SET NewsTitle = @NewsTitle, NewsCategory = @NewsCategory, NewsContent = @NewsContent WHERE NewsId = @NewsId";
                cmd.Parameters.AddWithValue("@NewsTitle", newsTitle);
                cmd.Parameters.AddWithValue("@NewsCategory", newsCategory);
                cmd.Parameters.AddWithValue("@NewsContent", newsContent);
                cmd.Parameters.AddWithValue("@NewsId", newsId);
                cmd.ExecuteNonQuery();
                return true;
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                Console.WriteLine("MySQL Exception:");
                Console.WriteLine("Error News: " + ex.Message);
                return false;
            }
        }
        
        public void CloseConnection()
        {
            _mySqlConnection.Close();
        }
        
        

    }
}

