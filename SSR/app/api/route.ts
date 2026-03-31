
export async function GET() {
  return Response.json({
    success: true,
    message: "Postify Backend API is running 🚀",
    endpoints: {
      health: "/api/health",
      docs: "API only backend"
    }
  });
}