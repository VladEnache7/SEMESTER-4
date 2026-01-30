using Microsoft.AspNetCore.Mvc;
using District3API.domain;
using District3API.RepoInterfaces;

namespace District3API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IRepoInterface<Account> _accountRepo;
        public AccountController(IRepoInterface<Account> accountRepo)
        {
            _accountRepo = accountRepo;
        }

        [HttpGet(Name = "GetAllAccounts")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_accountRepo.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}", Name = "AccountGetById")]
        [ProducesResponseType(200, Type = typeof(Account))]
        [ProducesResponseType(400)]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_accountRepo.GetById(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost(Name = "AddAccount")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public IActionResult Add([FromBody] Account account)
        {
            try
            {
                _accountRepo.Add(account);
                return CreatedAtRoute("AccountGetById", new { id = account.Id }, account);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut(Name = "UpdateAccount")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Update([FromBody] Account account)
        {
            try
            {
                _accountRepo.Update(account);
                return Ok(account);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}", Name = "DeleteAccount")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Delete([FromRoute] int id)
        {
            try
            {
                _accountRepo.Delete(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}