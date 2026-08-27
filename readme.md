Act as a senior full-stack web developer, UI/UX designer, and database engineer.

I want you to build a complete, production-style membership management website for my club called:

"Website Club"

TAGLINE:
"Where Web Creators Connect"

==================================================
1. TECHNOLOGY STACK
==================================================

Use ONLY:

Frontend:
- HTML5
- CSS3
- Vanilla JavaScript

Backend:
- Node.js
- Express.js

Database:
- MongoDB with Mongoose

Authentication:
- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control

Payments:
- Stripe Checkout for membership dues

Do NOT use:
- React
- Vue
- Next.js
- Angular
- PHP
- Laravel

The frontend must communicate with the Node.js/Express API using fetch().

==================================================
2. PROJECT STRUCTURE
==================================================

Create a clean professional folder structure:

website-club/
│
├── server/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Event.js
│   │   ├── RSVP.js
│   │   └── Payment.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── eventRoutes.js
│   │   ├── rsvpRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── resourceRoutes.js
│   │   └── adminRoutes.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── adminMiddleware.js
│   │
│   └── uploads/
│       └── resources/
│
├── public/
│   ├── index.html
│   ├── events.html
│   ├── about.html
│   ├── join.html
│   ├── login.html
│   │
│   ├── member/
│   │   ├── dashboard.html
│   │   ├── directory.html
│   │   ├── resources.html
│   │   └── events.html
│   │
│   ├── admin/
│   │   ├── login.html
│   │   ├── dashboard.html
│   │   ├── members.html
│   │   ├── events.html
│   │   └── payments.html
│   │
│   ├── css/
│   │   ├── style.css
│   │   ├── responsive.css
│   │   ├── dashboard.css
│   │   └── admin.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── auth.js
│   │   ├── dashboard.js
│   │   ├── directory.js
│   │   ├── events.js
│   │   ├── admin.js
│   │   └── payments.js
│   │
│   └── assets/
│       ├── images/
│       └── icons/
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md

==================================================
3. WEBSITE BRANDING
==================================================

Club name:
Website Club

Tagline:
"Where Web Creators Connect"

Website purpose:
A community where web developers, designers, WordPress creators, UX designers, and other web enthusiasts can connect, learn, collaborate, and attend events.

Design style:
- Modern
- Professional
- Tech-focused
- Dark mode
- Premium community feeling
- Clean spacing
- Glassmorphism cards
- Subtle gradients
- Green and blue technology accents
- Smooth hover effects
- Soft shadows
- Rounded cards
- Responsive navigation

Suggested colors:

--bg: #07111F
--bg-secondary: #0D1B2A
--card: #11243A
--green: #22C55E
--blue: #3B82F6
--cyan: #06B6D4
--white: #F8FAFC
--gray: #94A3B8
--border: #1E3A5F

Use CSS variables so the theme can easily be changed later.

==================================================
4. GLOBAL NAVIGATION
==================================================

Public navigation:

Logo:
Website Club

Links:
- Home
- Events
- About
- Join

Buttons:
- Login
- Join the Club

After login:

Member navigation:
- Dashboard
- Events
- Directory
- Resources
- Profile
- Logout

Admin navigation:
- Dashboard
- Members
- Events
- Payments
- Resources
- Logout

Make the navigation responsive.

On mobile:
- Hamburger menu
- Smooth opening/closing animation

==================================================
5. HOMEPAGE
==================================================

Create a professional hero section.

Headline:

"Where Web Creators Connect"

Supporting text:

"Website Club is a community for developers, designers, WordPress creators, UX professionals, and web enthusiasts who want to learn, collaborate, and build the future of the web together."

Buttons:

"Join the Club"
"Explore Events"

Hero visual:
Create a modern abstract technology background with:
- glowing green/blue gradients
- code-like decorative elements
- connected nodes
- subtle grid patterns

Add statistics:

500+
Members

30+
Events

15+
Workshops

10+
Community Projects

NEXT EVENTS SECTION:

Title:
"Upcoming Events"

Display the next 3 upcoming events.

Each event card should contain:
- Event image
- Event title
- Date
- Time
- Location
- Short description
- Number of attendees
- View Event button

TESTIMONIAL SECTION:

Title:
"What Our Members Say"

Display 3 realistic testimonials.

Example:

"Website Club helped me meet developers and designers who inspired me to improve my skills and start working on real projects."

— Dara, Frontend Developer

Create two additional realistic testimonials.

CTA SECTION:

"Build. Learn. Connect."

"Join a community of creators who are shaping the future of the web."

Button:
"Become a Member"

==================================================
6. EVENTS PAGE
==================================================

Create:

/events.html

Show:
- Upcoming Events
- Past Events

Event cards should include:
- Title
- Description
- Date
- Time
- Location
- Organizer
- Event type
- Attendee count

Event types:
- Workshop
- Meetup
- Conference
- Networking
- Hackathon

Public users can view event details.

Members can RSVP.

==================================================
7. ABOUT PAGE
==================================================

Create:

/about.html

Sections:

ABOUT WEBSITE CLUB

Write realistic content explaining that Website Club started as a small group of web creators who wanted to create a place where developers and designers could share knowledge and collaborate.

Include:

Our Mission:
"To connect web creators, encourage continuous learning, and create opportunities for collaboration."

Our Vision:
"To become a leading community for web technology creators."

OUR VALUES:

- Community
- Learning
- Collaboration
- Creativity
- Inclusion

CLUB HISTORY:

Create a realistic timeline:

2023 — Website Club founded
2024 — First community workshops
2025 — Reached 300 members
2026 — Expanded events and resources

CURRENT COMMITTEE:

Display committee cards with:
- Photo/avatar
- Name
- Position
- Short biography

Example roles:
- Club President
- Vice President
- Technical Lead
- Events Coordinator
- Community Manager

==================================================
8. JOIN PAGE
==================================================

Create:

/join.html

Registration form:

Full Name
Email
Password
Confirm Password
Expertise

Expertise dropdown:

- React
- Vue
- WordPress
- UX
- Other

Additional optional fields:
- Bio
- Profile image

Terms checkbox:

"I agree to the Website Club membership terms."

Button:
"Apply for Membership"

Important:

New registrations should NOT automatically become active members.

New account status:

"pending"

Admin must approve the application.

Possible statuses:

pending
approved
rejected
suspended

After registration show:

"Your membership application has been submitted. An administrator will review your application."

==================================================
9. LOGIN SYSTEM
==================================================

Create:

/login.html

Fields:
- Email
- Password

Features:
- Show/hide password
- Remember login state
- Error messages
- Loading state

Authentication:

Use JWT.

When login succeeds:
- Store JWT securely
- Retrieve user information
- Redirect based on role

Roles:

member
admin

Only approved users can access member pages.

Pending users should see:

"Your membership application is still waiting for approval."

Rejected users should see:

"Your membership application was not approved."

==================================================
10. MEMBER DASHBOARD
==================================================

Create:

/member/dashboard.html

Display:

"Welcome back, [Member Name]!"

Dashboard statistics:

Membership Status
Active

Membership Expiry
December 31, 2026

Events Attended
12

Upcoming RSVPs
3

DIGITAL MEMBERSHIP CARD:

Create a premium digital card containing:

Website Club
MEMBER

Name:
John Doe

Expertise:
Frontend Developer

Member Since:
January 2026

Expires:
December 31, 2026

Member ID:
WC-000123

Include:
- QR-code-style visual
- Club logo
- Member avatar

PAY MEMBERSHIP DUES:

Button:
"Pay Dues"

Connect this button to Stripe Checkout.

Membership fee:
$25/year

Payment flow:

Member clicks Pay Dues
→ Backend creates Stripe Checkout Session
→ User is redirected to Stripe
→ Successful payment returns to dashboard
→ Payment status is recorded in MongoDB

Do NOT store credit card information in MongoDB.

==================================================
11. MEMBER DIRECTORY
==================================================

Create:

/member/directory.html

Title:

"Member Directory"

Search bar:

"Search members..."

Filter by expertise:

All
React
Vue
WordPress
UX
Other

Table columns:

Name
Expertise
Join Date
Status

DO NOT display:
- Email addresses
- Passwords
- Private information

Allow searching by:
- Name
- Expertise

Create realistic sample members.

==================================================
12. RESOURCES PAGE
==================================================

Create:

/member/resources.html

Title:

"Community Resources"

Display downloadable PDF resources as cards.

Examples:

"January 2026 Meeting Minutes"
"Modern Web Development Guide"
"UX Design Workshop Notes"
"WordPress Performance Guide"
"JavaScript Best Practices"
"Community Project Handbook"

Each card contains:
- PDF icon
- Title
- Description
- Date
- File size
- Download button

Only logged-in members can download resources.

Store resource files in:

server/uploads/resources/

Create backend authorization so public users cannot directly access private resources.

==================================================
13. MEMBER EVENT RSVP
==================================================

Members can open an event and see:

"Will you attend?"

Buttons:

[ Attend ]
[ Cancel RSVP ]

When clicking Attend:
- Create RSVP record
- Increase attendee count

When clicking Cancel:
- Remove RSVP
- Decrease attendee count

Prevent duplicate RSVPs.

Display:

"You are attending"

for events the member has already joined.

Create RSVP model:

userId
eventId
status
createdAt

Status:
attending
cancelled

==================================================
14. ADMIN PANEL
==================================================

Create a completely separate admin interface.

Admin URL:

/admin/login.html

Admin dashboard:

/admin/dashboard.html

Use a professional admin dashboard design.

Sidebar:

Dashboard
Members
Events
Payments
Resources
Settings
Logout

==================================================
15. ADMIN DASHBOARD
==================================================

Display statistics:

Total Members
500

Pending Applications
12

Upcoming Events
8

Total Revenue
$12,500

Active Members
450

Recent activity:

- John Doe joined
- Sarah approved
- Mike paid membership dues
- New workshop created

==================================================
16. MEMBER MANAGEMENT
==================================================

Admin page:

/admin/members.html

Show table:

Name
Email
Expertise
Join Date
Status
Actions

Actions:

Approve
Reject
Suspend
View

Pending members should have:

[Approve] [Reject]

Approved members:

[View] [Suspend]

Admin should be able to view member details.

When approved:
- status becomes approved
- membership starts
- membership expiry is calculated
- member can log in

When rejected:
- status becomes rejected

==================================================
17. EVENT MANAGEMENT
==================================================

Admin page:

/admin/events.html

Admin can:

CREATE EVENT

Fields:

Event title
Description
Date
Time
Location
Event type
Image
Maximum attendees

Buttons:

Create Event
Cancel

EDIT EVENT

Admin can edit any event.

DELETE EVENT

Before deleting show confirmation:

"Are you sure you want to delete this event?"

VIEW EVENT

Admin can view:
- Event information
- Attendees
- RSVP count

==================================================
18. PAYMENT LOG
==================================================

Admin page:

/admin/payments.html

Show payment history.

Columns:

Member
Amount
Payment Date
Payment Status
Stripe Payment ID

Statuses:

Paid
Pending
Failed
Refunded

Create search and filtering.

Display total revenue.

Use Stripe webhooks to reliably update payment status.

Never trust only the frontend success page to mark a payment as paid.

==================================================
19. DATABASE MODELS
==================================================

USER MODEL

Fields:

_id
fullName
email
password
expertise
bio
profileImage
role
status
memberId
joinDate
membershipExpiry
createdAt

role:
member
admin

status:
pending
approved
rejected
suspended

EVENT MODEL

Fields:

_id
title
description
date
time
location
eventType
image
maxAttendees
createdAt

RSVP MODEL

Fields:

_id
userId
eventId
status
createdAt

PAYMENT MODEL

Fields:

_id
userId
amount
currency
stripeSessionId
stripePaymentIntentId
status
paymentDate
createdAt

RESOURCE MODEL

Fields:

_id
title
description
filename
fileSize
category
createdAt

==================================================
20. SECURITY REQUIREMENTS
==================================================

Implement:

- bcrypt password hashing
- JWT authentication
- Protected API routes
- Admin-only middleware
- Input validation
- Email validation
- Password validation
- Prevent duplicate emails
- Prevent duplicate RSVPs
- MongoDB sanitization
- Helmet
- CORS configuration
- Rate limiting for authentication routes
- Secure environment variables
- Never expose passwords through API responses
- Never return private member emails in directory API
- Never store Stripe card information

Use:

.env

Example:

MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
PORT=3000

Create:

.env.example

==================================================
21. API ROUTES
==================================================

AUTH:

POST /api/auth/register
POST /api/auth/login
GET /api/auth/me

MEMBERS:

GET /api/members
GET /api/members/:id
PUT /api/members/profile

EVENTS:

GET /api/events
GET /api/events/:id
POST /api/events
PUT /api/events/:id
DELETE /api/events/:id

RSVP:

POST /api/events/:id/rsvp
DELETE /api/events/:id/rsvp
GET /api/events/:id/rsvp

PAYMENTS:

POST /api/payments/create-checkout
GET /api/payments/status
POST /api/payments/webhook

RESOURCES:

GET /api/resources
GET /api/resources/:id/download

ADMIN:

GET /api/admin/dashboard
GET /api/admin/members
PUT /api/admin/members/:id/approve
PUT /api/admin/members/:id/reject
PUT /api/admin/members/:id/suspend
GET /api/admin/payments

==================================================
22. RESPONSIVE DESIGN
==================================================

The website must work perfectly on:

- Desktop
- Laptop
- Tablet
- Mobile phone

Breakpoints:

1200px
992px
768px
576px
480px

Mobile requirements:

- Responsive navigation
- Hamburger menu
- Cards become one column
- Tables become horizontally scrollable or responsive cards
- Buttons remain easy to tap
- Forms fit mobile screens
- Dashboard adapts to small screens
- Admin sidebar becomes mobile drawer

==================================================
23. UI/UX DETAILS
==================================================

Add:

- Smooth transitions
- Hover effects
- Button animations
- Loading spinners
- Toast notifications
- Modal dialogs
- Confirmation dialogs
- Form validation
- Empty states
- Error states
- Skeleton/loading states where appropriate

Examples:

Success:
"Membership application submitted successfully."

Error:
"Invalid email or password."

RSVP:
"You are now attending this event."

Payment:
"Payment completed successfully."

Admin:
"Member approved successfully."

==================================================
24. DARK MODE
==================================================

The primary design should be dark mode.

Add a theme toggle:

Dark
Light

Save the user's theme preference in localStorage.

Use CSS variables instead of hardcoding colors throughout the CSS.

==================================================
25. REALISTIC SAMPLE DATA
==================================================

Do not use lorem ipsum.

Create realistic club content.

Example events:

"Frontend Performance Workshop"

"Building Accessible Websites"

"Website Club Monthly Meetup"

"Modern UX Design for Developers"

"Community Hackathon 2026"

Create realistic descriptions, dates, locations, and organizers.

==================================================
26. ERROR HANDLING
==================================================

Create professional error handling.

Backend:

- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

Frontend should display user-friendly messages.

Never expose stack traces to normal users.

==================================================
27. SEED DATABASE
==================================================

Create a seed script:

npm run seed

It should create:

- 1 admin account
- 10+ approved members
- 3 pending members
- 5+ events
- 5+ resources
- Sample RSVPs
- Sample payment records

Create an admin account using environment variables rather than hardcoding a real password.

==================================================
28. PACKAGE.JSON
==================================================

Create all required dependencies.

Expected packages include:

express
mongoose
bcryptjs
jsonwebtoken
dotenv
cors
helmet
express-rate-limit
stripe
multer

Add scripts:

npm start
npm run dev
npm run seed

==================================================
29. README
==================================================

Create a complete README.md explaining:

1. Project overview
2. Features
3. Technologies
4. Folder structure
5. Installation
6. MongoDB setup
7. Environment variables
8. Stripe setup
9. How to seed database
10. How to run development server
11. How to run production server
12. Admin login setup
13. API documentation
14. Security notes

Example commands:

npm install

npm run seed

npm run dev

Then:

http://localhost:3000

==================================================
30. IMPORTANT FUNCTIONAL REQUIREMENTS
==================================================

This must be a REAL working application, not a static mockup.

The following must actually work:

✓ User registration
✓ Login
✓ JWT authentication
✓ Logout
✓ Member approval
✓ Member rejection
✓ Admin authorization
✓ Event creation
✓ Event editing
✓ Event deletion
✓ Event listing
✓ Event RSVP
✓ Cancel RSVP
✓ Member directory search
✓ Resource listing
✓ Protected resource downloads
✓ Stripe Checkout
✓ Stripe payment recording
✓ Payment history
✓ Membership expiry
✓ Digital membership card
✓ Responsive design
✓ Mobile navigation
✓ Form validation
✓ Error handling

Do not fake backend functionality with localStorage.

Use MongoDB for persistent data.

Use the Express backend for all database operations.

==================================================
31. FINAL QUALITY REQUIREMENT
==================================================

Before finishing:

1. Check every API route.
2. Check authentication.
3. Check admin authorization.
4. Check database models.
5. Check registration.
6. Check login.
7. Check event CRUD.
8. Check RSVP logic.
9. Check Stripe integration.
10. Check resource protection.
11. Check responsive layout.
12. Check mobile navigation.
13. Check all links.
14. Check JavaScript console errors.
15. Check server errors.
16. Make sure passwords are never returned by APIs.
17. Make sure member emails are hidden from the public directory.
18. Make sure pending members cannot access member-only pages.
19. Make sure only admins can access admin APIs.
20. Make sure Stripe webhook verification is implemented.

Provide the COMPLETE project code for every file.

Do not give me pseudo-code.

Do not leave TODO comments for important functionality.

Do not use placeholder lorem ipsum content.

Make the project ready to install with:

npm install

and run with:

npm run dev

The final result should feel like a real professional membership platform called "Website Club", not a simple school demo.