using Microsoft.AspNetCore.Mvc;
using District3API.domain;
using District3API.RepoInterfaces;

namespace District3API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CloseFriendsProfileController : Controller
    {
        private readonly IRepoInterface<CloseFriendProfile> _closeFriendsProfileRepo;
        public CloseFriendsProfileController(IRepoInterface<CloseFriendProfile> closeFriendsProfileRepo)
        {
            _closeFriendsProfileRepo = closeFriendsProfileRepo;
        }

        [HttpGet(Name = "GetAllCloseFriendsProfiles")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_closeFriendsProfileRepo.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}", Name = "CloseFriendsProfileGetById")]
        [ProducesResponseType(200, Type = typeof(CloseFriendProfile))]
        [ProducesResponseType(400)]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_closeFriendsProfileRepo.GetById(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost(Name = "AddCloseFriendsProfile")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public IActionResult Add([FromBody] CloseFriendProfile closeFriendProfile)
        {
            try
            {
                _closeFriendsProfileRepo.Add(closeFriendProfile);
                return CreatedAtRoute("CloseFriendsProfileGetById", new { id = closeFriendProfile.Id }, closeFriendProfile);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut(Name = "UpdateCloseFriendsProfile")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Update([FromBody] CloseFriendProfile closeFriendProfile)
        {
            try
            {
                _closeFriendsProfileRepo.Update(closeFriendProfile);
                return Ok(closeFriendProfile);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}", Name = "DeleteCloseFriendsProfile")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Delete([FromRoute] int id)
        {
            try
            {
                _closeFriendsProfileRepo.Delete(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}