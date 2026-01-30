using District3API.domain;
using District3API.DataBaseContext;
using District3API.RepoInterfaces;

namespace District3API.Repos
{
    public class UserRepository : IRepoInterface<User>
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(User item)
        {
            _context.User.Add(item);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var user = _context.User.Find(id);
            if (user != null)
            {
                _context.User.Remove(user);
                _context.SaveChanges();
            }
        }

        public ICollection<User> GetAll()
        {
            return _context.User.ToList();
        }

        public User GetById(int id)
        {
            return _context.User.Find(id);
        }

        public void Update(User item)
        {
            _context.User.Update(item);
            _context.SaveChanges();
        }
    }
}