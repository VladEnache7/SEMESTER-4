using Microsoft.AspNetCore.Mvc;

namespace Homework9_2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
