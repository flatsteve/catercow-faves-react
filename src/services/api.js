import axios from "axios";

export default axios.create({
  baseURL: "https://cvrgzgjqoaarrxtfuelq.supabase.co/rest/v1/",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2cmd6Z2pxb2FhcnJ4dGZ1ZWxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNjg5NzQsImV4cCI6MjAyMjc0NDk3NH0.l3JTsfiD_pZPgHl5mf56GGHomd96qZymgi6aO5bT3rg",
  },
});
