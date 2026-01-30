using Microsoft.AspNetCore.Mvc;
using District3API.domain;
using District3API.RepoInterfaces;

namespace District3API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IRepoInterface<User> _userRepo;
        public UserController(IRepoInterface<User> userRepo)
        {
            _userRepo = userRepo;
        }

        [HttpGet(Name = "GetAllUsers")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_userRepo.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}", Name = "UserGetById")]
        [ProducesResponseType(200, Type = typeof(User))]
        [ProducesResponseType(400)]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_userRepo.GetById(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost(Name = "AddUser")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public IActionResult Add([FromBody] User user)
        {
            try
            {
                _userRepo.Add(user);
                return CreatedAtRoute("GetById", new { id = user.Id }, user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut(Name = "UpdateUser")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Update([FromBody] User user)
        {
            try
            {
                _userRepo.Update(user);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}", Name = "DeleteUser")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Delete([FromRoute] int id)
        {
            try
            {
                _userRepo.Delete(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
