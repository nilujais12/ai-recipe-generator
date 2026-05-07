# 🍳 AI Recipe Generator

An intelligent full-stack web application that generates personalized recipes using AI based on available ingredients. Built with the MERN stack and powered by Groq AI (LLaMA 3.3 70B).

## ✨ Features

- 🤖 **AI-Powered Recipe Generation** — Enter ingredients and get a complete recipe instantly using Groq AI
- 🍽️ **Cuisine Filter** — Choose from Indian, Italian, Chinese, Mexican, Continental
- 💾 **Save Recipes** — Save your favorite AI-generated recipes to MongoDB
- 📋 **Recipe Detail Modal** — Click any saved recipe to view full details in a popup
- 🗑️ **Delete Recipes** — Remove saved recipes anytime
- 📱 **Responsive Design** — Works on all screen sizes

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS v4
- React Router DOM
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Groq AI SDK (LLaMA 3.3 70B)


2. **Setup Backend**
```bash
cd server
npm install
```

3. **Create `.env` file in server folder**
```env
GROQ_API_KEY=your_groq_api_key_here
MONGO_URI=mongodb://localhost:27017/ai-recipe-generator
PORT=5000
```

4. **Setup Frontend**
```bash
cd ../client
npm install
```

5. **Run the application**

Backend (Terminal 1):
```bash
cd server
npm run dev
```

Frontend (Terminal 2):
```bash
cd client
npm run dev
```
## 🤝 Contributing
Pull requests are welcome!

## 👩‍💻 Developer
**Nilu Laxmikant Jaiswal**
- GitHub: [@nilujais12](https://github.com/nilujais12)
- LinkedIn: [nilujaiswal19](https://www.linkedin.com/in/nilujaiswal19)
- Email: nilulj19@gmail.com
