using Microsoft.AspNetCore.Mvc;
using ProfessionalProfile.Domain;
using ProfessionalProfile.Repo;

namespace ProfessionalProfile.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepoInterface _userRepo;
        public UserController(IUserRepoInterface userRepo)
        {
            _userRepo = userRepo;
        }

        [HttpGet(Name = "GetAll")]
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

        [HttpGet("{id}", Name = "GetById")]
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

        [HttpPost(Name = "Add")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public IActionResult Add([FromBody] User user)
        {
            try
            {
                _userRepo.Add(user);
                return CreatedAtRoute("GetById", new { id = user.userId }, user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut(Name = "Update")]
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

        [HttpDelete("{id}", Name = "Delete")]
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
