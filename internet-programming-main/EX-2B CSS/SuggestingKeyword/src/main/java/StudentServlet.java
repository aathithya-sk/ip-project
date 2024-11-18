import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@WebServlet("/StudentServlet")
public class StudentServlet extends HttpServlet {
    private static final List<String> students = Arrays.asList(
        "Alice", "Bob", "Charlie", "David", "Eve", "Evan", "Frank", "Grace", "Hannah", "Ivy", "Jack"
    );

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String query = request.getParameter("query");
        List<String> suggestions = new ArrayList<>();

        if (query != null && !query.trim().isEmpty()) {
            suggestions = students.stream()
                .filter(name -> name.toLowerCase().startsWith(query.toLowerCase()))
                .collect(Collectors.toList());
        }

        // Manually construct JSON array
        StringBuilder json = new StringBuilder("[");
        for (int i = 0; i < suggestions.size(); i++) {
            json.append("\"").append(suggestions.get(i)).append("\"");
            if (i < suggestions.size() - 1) {
                json.append(",");
            }
        }
        json.append("]");

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        out.print(json.toString());
        out.flush();
    }
}

