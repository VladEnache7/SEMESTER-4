using District3API.domain;
using District3API.DataBaseContext;
using District3API.RepoInterfaces;

namespace District3API.Repos
{
    public class PostRepository : IRepoInterface<Post>
    {
        private readonly DataContext _context;

        public PostRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(Post item)
        {
            _context.Post.Add(item);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var post = _context.Post.Find(id);
            if (post != null)
            {
                _context.Post.Remove(post);
                _context.SaveChanges();
            }
        }

        public ICollection<Post> GetAll()
        {
            return _context.Post.ToList();
        }

        public Post GetById(int id)
        {
            return _context.Post.Find(id);
        }

        public void Update(Post item)
        {
            _context.Post.Update(item);
            _context.SaveChanges();
        }
    }
}