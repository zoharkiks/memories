{
   "version": 2,
   "name": "memories-app",
   "builds": [
      { "src": "index.js", "use": "@vercel/node" }
   ],
   "routes": [
      { "src": "/(.*)", "dest": "index.js" }
   ]
}
