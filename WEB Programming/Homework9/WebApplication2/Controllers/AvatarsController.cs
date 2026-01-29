using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Data;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class AvatarsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AvatarsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Avatars
        public async Task<IActionResult> Index()
        {
            return View(await _context.Avatar.ToListAsync());
        }

        // GET: Avatars/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var avatar = await _context.Avatar
                .FirstOrDefaultAsync(m => m.Id == id);
            if (avatar == null)
            {
                return NotFound();
            }

            return View(avatar);
        }

        // GET: Avatars/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Avatars/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Age,Powers,Rank")] Avatar avatar)
        {
            if (ModelState.IsValid)
            {
                _context.Add(avatar);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(avatar);
        }

        // GET: Avatars/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var avatar = await _context.Avatar.FindAsync(id);
            if (avatar == null)
            {
                return NotFound();
            }
            return View(avatar);
        }

        // POST: Avatars/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Age,Powers,Rank")] Avatar avatar)
        {
            if (id != avatar.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(avatar);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AvatarExists(avatar.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(avatar);
        }

        // GET: Avatars/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var avatar = await _context.Avatar
                .FirstOrDefaultAsync(m => m.Id == id);
            if (avatar == null)
            {
                return NotFound();
            }

            return View(avatar);
        }

        // POST: Avatars/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var avatar = await _context.Avatar.FindAsync(id);
            if (avatar != null)
            {
                _context.Avatar.Remove(avatar);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AvatarExists(int id)
        {
            return _context.Avatar.Any(e => e.Id == id);
        }
    }
}
