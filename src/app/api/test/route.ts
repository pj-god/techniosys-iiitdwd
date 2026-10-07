import { google } from "googleapis";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        project_id: process.env.PROJECT_ID,
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets.readonly",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: "Day1!A1:Z100",
    });

    console.log("GOOGLE SHEET DATA:");
    console.log(response.data.values);

    return Response.json({
      success: true,
      data: response.data.values,
    });
  } catch (error) {
    console.error("GOOGLE SHEETS ERROR:", error);

    return Response.json(
      {
        success: false,
        error: "Failed to fetch Google Sheet",
        details:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}