using Microsoft.AspNetCore.Mvc;
using District3API.domain;
using District3API.RepoInterfaces;

namespace District3API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GroupController : Controller
    {
        private readonly IRepoInterface<Group> _groupRepo;
        public GroupController(IRepoInterface<Group> groupRepo)
        {
            _groupRepo = groupRepo;
        }

        [HttpGet(Name = "GetAllGroups")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_groupRepo.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}", Name = "GroupGetById")]
        [ProducesResponseType(200, Type = typeof(Group))]
        [ProducesResponseType(400)]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_groupRepo.GetById(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost(Name = "AddGroup")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public IActionResult Add([FromBody] Group group)
        {
            try
            {
                _groupRepo.Add(group);
                return CreatedAtRoute("GroupGetById", new { id = group.Id }, group);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut(Name = "UpdateGroup")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Update([FromBody] Group group)
        {
            try
            {
                _groupRepo.Update(group);
                return Ok(group);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}", Name = "DeleteGroup")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Delete([FromRoute] int id)
        {
            try
            {
                _groupRepo.Delete(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}