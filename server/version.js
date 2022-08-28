{
   "version": 1,
   "name": "memories-app",
   "builds": [
      { "src": "app.js", "use": "@vercel/node" }
   ],
   "routes": [
      { "src": "/(.*)", "dest": "/app.js" }
   ]
}
