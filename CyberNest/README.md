# CyberNest – Vizsgaremek admin alkalmazása

Admin belejentkezés a `http://localhost:5050/api/auth/login` URL-re küldött 

```json
{
  "elerhetoseg":"admin@local", 
  "jelszo":"admin123"
}
```

adatokkal, amely visszatér a 

```
{
  "message": "Sikeres bejelentkezés.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmV2IjoiYWRtaW4iLCJlbGVyaGV0b3NlZyI6ImFkbWluQGxvY2FsIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzcyODg5MDkyLCJleHAiOjE3NzI5NzU0OTJ9.nsEfmimV0WAfw9kBngfA_NgSZDO-o2jNB8suL_RTSA0",
  "user": {
    "id": 1,
    "nev": "admin",
    "elerhetoseg": "admin@local",
    "role": "admin"
  }
}
```
adatokkal.
