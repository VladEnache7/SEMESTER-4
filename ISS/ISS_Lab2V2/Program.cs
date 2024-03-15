using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace ISS_Lab2V2
{
    internal class Program
    {
        static void Main(string[] args)
        {   
            // testing the IsValidEmail method
            Console.WriteLine("<---Testing the IsValidEmail method--->");
            Console.WriteLine("name @domain.com - " + DataValidator.IsValidEmail("name @domain.com"));
            Console.WriteLine("@.ro - " + DataValidator.IsValidEmail("@.ro"));
            Console.WriteLine("name@domain - " + DataValidator.IsValidEmail("name@domain"));
            Console.WriteLine("name.com - " + DataValidator.IsValidEmail("name.com"));
            Console.WriteLine("name@gmail.com - " + DataValidator.IsValidEmail("name@gmail.com"));


            // testing the IsValidPhoneNumber method
            Console.WriteLine("\n<---Testing the IsValidPhoneNumber method--->");
            Console.WriteLine("1234567890A - " + DataValidator.IsValidPhoneNumber("1234567890A"));
            Console.WriteLine("12 34567890 - " + DataValidator.IsValidPhoneNumber("12 34567890"));
            Console.WriteLine("1234567890 - " + DataValidator.IsValidPhoneNumber("1234567890"));
            Console.WriteLine("1234567890123456 - " + DataValidator.IsValidPhoneNumber("1234567890123456"));

            // testing the IsValidDate method
            Console.WriteLine("\n<---Testing the IsValidDate method--->");
            Console.WriteLine("12/12/2020 - " + DataValidator.IsValidDate("12/12/2020"));
            Console.WriteLine("12122020 - " + DataValidator.IsValidDate("12122020"));
            Console.WriteLine("12.12.2020// - " + DataValidator.IsValidDate("12.12.2020//"));

            // testing the SanitizeInput method
            Console.WriteLine("\n<---Testing the SanitizeInput method--->");
            Console.WriteLine("SELECT * FROM users - " + DataValidator.IsNotSqlInjection("SELECT * FROM users"));
            Console.WriteLine("1 or 1 = 1 - " + DataValidator.IsNotSqlInjection("1 or 1 = 1"));


            Console.ReadLine();
            return;
        }
    }

    public static class DataValidator
    {
        // This method checks if the input string is a valid email
        // 
        // @param email: the email to be checked
        // @return: a tuple containing a boolean and a string
        //          the boolean is true if the email is valid, false otherwise
        //          the string contains the error message if the email is not valid
        public static (bool, string) IsValidEmail(string email)
        {   
            // check that the email does not contain any spaces
            if (email.Contains(" "))
            {
                return (false, "The Email cannot contain spaces");
            }
            // the email cannot be less than 5 characters because "@.domain" has at least 4 characters
            if (email.Length < 5)
            {
                return (false, "The Email is too short");
            }
            // the email must contain an @
            if (!email.Contains("@"))
            {
                return (false, "The Email does not contain @");
            }
            // the email must contain a . after the @
            if (email.LastIndexOf(".") < email.LastIndexOf("@"))
            {
                return (false, "The Email does not have a domain extension");
            }   

            return (true, "Valid Email");
        }
        
        // This method checks if the input string is a valid phone number
        //
        // @param phone: the phone number to be checked
        // @return: a tuple containing a boolean and a string
        //          the boolean is true if the phone number is valid, false otherwise
        //          the string contains the error message if the phone number is not valid
        public static (bool, string) IsValidPhoneNumber(string phone)
        {
            // the phone number cannot contain any letters
            if (phone.Any(char.IsLetter))
            {
                return (false, "The phone number cannot contain letters");
            }
            // the phone number cannot contain any spaces
            if (phone.Contains(" "))
            {
                return (false, "The phone number cannot contain spaces");
            }
            // the phone number cannot be less than 10 characters
            if (phone.Length < 10)
            {
                return (false, "The phone number is too short");
            }
            // the phone number cannot be more than 15 characters
            if (phone.Length > 15)
            {
                return (false, "The phone number is too long");
            }
            return (true, "Valid Phone Number");
        }
        // This method checks if the input string is a valid date
        //
        // @param date: the date to be checked
        // @return: a tuple containing a boolean and a string
        //          the boolean is true if the date is valid, false otherwise
        //          the string contains the error message if the date is not valid
        public static (bool, string) IsValidDate(string date)
        {
            // the date cannot contain any letters
            if (date.Any(char.IsLetter))
            {
                return (false, "The date cannot contain letters");
            }
            string separators ="/,.- ";

            // the date must contain at least 2 separator
            int nrOfSeparators = date.Count(c => separators.Contains(c));
            //Console.WriteLine(nrOfSeparators);
            if (nrOfSeparators < 2 || nrOfSeparators > 3)
            {
                return (false, "The date must contain at least 2 and at most 3 separators");
            }

            // I am not sure if I can use the TryParse method
            DateTime dateTime;
            if (!DateTime.TryParse(date, out dateTime))
            {
                return (false, "The date is not valid");
            }

            return (true, "Valid Date");
        }

        // This method check if the input string is not a SQL injection and sanitizes it
        //
        // @param input: the input to be checked
        // @return: a tuple containing a boolean and a string
        //          the boolean is true if the input is not a SQL injection, false otherwise
        //          the string contains the sanitized input

        public static string IsNotSqlInjection(string input)
        {
            if (input.Contains(";"))
            {
                // remove everything after the first ;
                input = input.Substring(0, input.IndexOf(";"));
            }

            if (input.Contains("\""))
            {
                // remove everything after the first ;
                input = input.Substring(0, input.IndexOf("\""));
            }


            // the input cannot contain any SQL keywords
            //string[] sqlKeywords = { "SELECT", "INSERT", "UPDATE", "DELETE", "DROP", "CREATE", "ALTER", "TRUNCATE", "UNION", "JOIN", "FROM", "WHERE", "AND", "OR", "NOT", "IN", "LIKE", "BETWEEN", "IS", "NULL", "ORDER", "BY", "GROUP", "HAVING", "COUNT", "SUM", "AVG", "MIN", "MAX", "AS", "ON", "ASC", "DESC", "INNER", "OUTER", "LEFT", "RIGHT", "FULL", "CROSS", "NATURAL", "JOIN", "USING", "SET", "VALUES", "INTO", "AS", "DISTINCT", "ALL", "ANY", "SOME", "EXISTS", "CASE", "WHEN", "THEN", "ELSE", "END", "WHILE", "FOR", "FOREACH", "CURSOR", "OPEN", "CLOSE", "FETCH", "NEXT", "PRIOR", "FIRST", "LAST", "LIMIT", "OFFSET" };
            //Console.WriteLine(input.ToUpper().Contains));
            if (sqlKeywords.Any(input.ToUpper().Contains))
            {   
                //Console.WriteLine
                // remove everything after the first keyword
                //input = input.Substring(0, input.IndexOf(sqlKeywords.First(input.ToUpper().Contains)));

                return input;
            }

            return input;
        }
    }
}
