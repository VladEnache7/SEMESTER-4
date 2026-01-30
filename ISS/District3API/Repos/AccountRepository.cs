using District3API.domain;
using District3API.DataBaseContext;
using District3API.RepoInterfaces;

namespace District3API.Repos
{
    public class AccountRepository : IRepoInterface<Account>
    {
        private readonly DataContext _context;

        public AccountRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(Account item)
        {
            _context.Account.Add(item);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var account = _context.Account.Find(id);
            if (account != null)
            {
                _context.Account.Remove(account);
                _context.SaveChanges();
            }
        }

        public ICollection<Account> GetAll()
        {
            return _context.Account.ToList();
        }

        public Account GetById(int id)
        {
            return _context.Account.Find(id);
        }

        public void Update(Account item)
        {
            _context.Account.Update(item);
            _context.SaveChanges();
        }
    }
}