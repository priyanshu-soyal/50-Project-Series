const sampleListing = [
  {
    title:
      "The Rise of Serverless: Why Developers Are Leaving Traditional Hosting",
    author: "Aarav Sharma",
    content:
      "Serverless computing, jaise AWS Lambda, Google Cloud Functions, aur Azure Functions, backend logic ko 'as-a-service' chalaata hai. Isse humein servers manage karne ki zaroorat nahi padti, billing sirf execution time par hoti hai, aur scalability built-in milti hai. Yeh cost-efficiency aur deployment speed ke liye game-changer hai, khas kar microservices ke liye. Hum is post mein performance, vendor lock-in, aur cold-start issues par bhi charcha karenge.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: new Date("2025-10-02T10:30:00Z"),
    tags: ["Cloud", "Serverless", "AWS", "Deployment"],
  },
  {
    title: "Mastering Asynchronous JavaScript: Promises, Async/Await Explained",
    slug: "mastering-async-javascript",
    author: "Deepika Singh",
    excerpt:
      "JavaScript mein data fetching aur non-blocking operations ko samajhna bahut zaroori hai. Yahan Promises aur Async/Await ka deep dive, real-world examples ke saath.",
    content:
      "Traditional JavaScript mein, blocking code se performance ruk jaati thi. Promises ne callback hell ko theek kiya, jisse code zyaada padhne-yogya (readable) bana. Phir aaye Async/Await, jo asynchronous code ko synchronous code ki tarah likhne ki suvidha dete hain. Hum `try...catch` blocks ka use karke error handling ko aasan bana sakte hain aur apne Express routes ko non-blocking rakh sakte hain, khaas kar MongoDB queries ke dauraan.",
    imageUrl:
      "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXN5bmNocm9ub3VzJTIwSmF2YVNjcmlwdCUzQXxlbnwwfHwwfHx8MA%3D%3D",
    date: new Date("2025-09-29T15:45:00Z"),
    tags: ["JavaScript", "Async", "Promises", "WebDev"],
  },
  {
    title: "Designing for Mobile-First: The Future of Web Layouts",
    slug: "mobile-first-web-design",
    author: "Kabir Khan",
    excerpt:
      "Aaj ke daur mein zyadatar traffic mobile se aata hai. Jaaniye ki kyun 'Mobile-First' approach sirf trend nahi, balki ek zaroorat hai, aur isse kaise implement karein.",
    content:
      "Mobile-First design ka matlab hai ki hum pehle sabse choti screen ke liye styling karte hain aur phir CSS Media Queries ka use karke badi screens ke liye styles add karte hain. Isse performance, loading speed, aur user experience mein sudhar hota hai. Hum dekhenge ki kaise Flexbox aur Grid (jaisa ki humne aapke blog grid mein kiya) ka use karke complex layouts ko responsive bana sakte hain.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: new Date("2025-09-25T09:00:00Z"),
    tags: ["Design", "CSS", "Responsive", "Mobile"],
  },
  {
    title: "Optimizing MongoDB Queries for High Traffic Blogs",
    slug: "optimizing-mongodb-queries",
    author: "Aarav Sharma",
    excerpt:
      "Jab aapka blog badhta hai, toh MongoDB queries slow ho sakte hain. Indexes, Projections, aur Aggregation Pipelines ki madad se performance ko kaise boost karein.",
    content:
      "MongoDB mein, Indexes bilkul kitaab ki tarah kaam karte hain - yeh data retrieval ko tez karte hain. Khaas kar `slug` field par index banana zaroori hai. Hum Projection ka use karke sirf woh fields fetch karenge jo zaroori hain (jaise ki `excerpt` page par sirf title, slug, aur excerpt). Aggregation Pipelines complex reporting ya data transformation ke liye bahut powerful hote hain.",
    imageUrl:
      "https://images.unsplash.com/photo-1637569500745-703ca1c96733?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3B0aW1pemluZyUyME1vbmdvREIlMjBRdWVyaWVzJTIwZm9yJTIwSGlnaCUyMFRyYWZmaWMlMjBCbG9nc3xlbnwwfHwwfHx8MA%3D%3D",
    date: new Date("2025-09-18T12:00:00Z"),
    tags: ["MongoDB", "Performance", "Database", "Backend"],
  },
  {
    title: "Boosting Developer Productivity with VS Code Extensions",
    slug: "vscode-productivity-extensions",
    author: "Priya Singh",
    excerpt:
      "Apne development workflow ko supercharge karne ke liye 5 zaroori VS Code extensions. Code snippets se lekar Live Share tak, sab kuch yahan hai.",
    content:
      "VS Code ka ecosystem bahut bada hai. Extensions jaise 'Prettier' aur 'ESLint' code formatting aur quality maintain karte hain. 'DotENV' se environment variables manage karna aasan ho jaata hai. 'Thunder Client' ya 'REST Client' se hum VS Code ke andar hi API testing kar sakte hain, jo Express development ke liye bahut helpful hai.",
    imageUrl:
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: new Date("2025-09-10T16:00:00Z"),
    tags: ["Productivity", "Tools", "VSCode", "DevOps"],
  },
];

module.exports = {data: sampleListing};