# brief-4
# ⚽ Tachkila v2 – Atlas FC

Tachkila is a web app for the amateur club **Atlas FC**. The first version let the coach build lineups in a 4-4-2. Version 2 adds **squad management** and **match tracking**, in three pages that share the same data.

**🔗 Live demo:** [brief-4-psi.vercel.app](https://brief-4-psi.vercel.app)  
**📦 Repository:** [github.com/pinkjaguar007/brief-4](https://github.com/pinkjaguar007/brief-4)

---

## Pages

| Page | File | Live link |
|------|------|-----------|
| Players (squad) | `players.html` | [Open](https://brief-4-psi.vercel.app/players.html) |
| Composition (lineup) | `composition.html` | [Open](https://brief-4-psi.vercel.app/composition.html) |
| Matches | `matches.html` | [Open](https://brief-4-psi.vercel.app/matches.html) |

All pages are linked from the header, and the active page is highlighted.

## Features

### Players
- Player cards with number, name, position, age and status (**Fit** / **Injured**), with a left border in the color of the position.
- Add, edit and delete a player from a modal (deletion asks for confirmation).
- Real-time form validation with regexes and an error message under each field.
- Captain button on each card: only one captain at a time, and the card border changes color.
- Search by name combined with a position filter.
- Pagination of 8 cards per page, kept correct after every search, filter, add or delete.

### Matches
- Add, edit and delete a match (opponent, date, time, venue, home / away) with regex validation.
- Tabs **All / Upcoming / Played**, combined with an opponent search.
- When the match time has passed (`Date.now()`), an **Enter score** button opens a modal.
- The score is shown in **green** (win), **red** (loss) or **gray** (draw).

### Composition
- Place players on the pitch (CSS Grid, 4-4-2), as in v1.
- An injured player cannot be placed, and a position only accepts a player of its own position.
- A player who changes position, becomes injured or is deleted leaves the pitch automatically.

## Business rules

| Rule | Constraint |
|------|-----------|
| Name | 3 to 30 letters |
| Jersey number | Unique, from 1 to 99 |
| Age | Between 18 and 39 |
| Goalkeepers | 2 at most in the squad |
| Captain | One only |
| Injured player | Cannot be placed on the pitch |

## Tech stack

- **HTML5** with semantic tags
- **Tailwind CSS** for styling
- **JavaScript ES6+** in modules (`<script type="module">`): arrow functions, template literals, destructuring, spread, `map`, `filter`, `find`, `some`, `slice`
- **localStorage** to persist data and share it between the three pages
- **Vercel** for deployment

## Code organization

The code is split into ES6 modules, with data and validation kept separate from the interface:

```
brief-4/
├── players.html
├── composition.html
├── matches.html
├── img/
└── js/
    ├── data.js          # data layer: localStorage read / write, shared state
    ├── validation.js    # regexes and validation rules
    ├── ui.js            # DOM rendering (createElement + textContent), modals
    ├── players.js       # entry file – Players page
    ├── composition.js   # entry file – Composition page
    └── matches.js       # entry file – Matches page
```

Safety and quality choices:
- Elements are built with `createElement` and `textContent`, never `innerHTML` with user input.
- Event delegation on the lists (cards, matches).
- Modals close with ×, Cancel, Escape, or a click on the backdrop.

## Getting started

```bash
git clone https://github.com/pinkjaguar007/brief-4.git
cd brief-4
```

Because the project uses ES modules, it must be served over HTTP. Open the folder in VS Code and launch it with the **Live Server** extension (opening the HTML file directly will not work).

## Responsive design

| Device | Width |
|--------|-------|
| Large desktop | 1280px and up |
| Small desktop | 1024px – 1279px |
| Tablet | 768px – 1023px |
| Mobile | up to 767px |

## Accessibility

- Labels on every form field and clear error messages under each field
- Keyboard navigation (including closing modals with Escape)
- Sufficient color contrast
- Active page indicated in the navigation

## Git workflow

- One **feature branch** per feature (`feature/*`) and one **Pull Request** per feature
- Regular commits with clear messages
- Pull Requests reviewed by a classmate

## Project context

Individual project (Brief 4) completed at **YouCode** over 8 days, from 28/10/2026 to 06/11/2026.

## Author

**pinkjaguar007** – [GitHub](https://github.com/pinkjaguar007)
