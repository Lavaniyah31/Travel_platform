# Astera Travel Ops UI

This project contains a React + Vite frontend and a Python FastAPI backend for the Astera business-travel operations mockup.

## Run locally

Frontend:

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Backend:

```bash
python -m venv .venv
.venv\Scripts\python.exe -m pip install fastapi uvicorn
.venv\Scripts\python.exe -m uvicorn backend.app:app --host 0.0.0.0 --port 8001
```

Then open:

- http://localhost:5173
- http://localhost:8001/api/overview

## Project structure

- `src/App.jsx` — React interface for all eight screens and supporting tokens/components
- `src/App.css` — styling for the visual system and dense operational UI
- `backend/app.py` — mocked API returning travel data for the dashboard, trips, flights, hotels, and restaurants
