from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message":"BioSage backend is running!"}