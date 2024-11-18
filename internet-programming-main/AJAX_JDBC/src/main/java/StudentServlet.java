import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/StudentServlet")
public class StudentServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private static final Map<String, String> studentData = new HashMap<>();

    static {
        studentData.put("101", "Name: John Doe<br>Age: 20<br>Course: Computer Science");
        studentData.put("102", "Name: Jane Smith<br>Age: 21<br>Course: Electrical Engineering");
        studentData.put("103", "Name: Emily Brown<br>Age: 22<br>Course: Mechanical Engineering");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String regNo = request.getParameter("regNo");
        String studentInfo = studentData.getOrDefault(regNo, "Student not found.");

        response.setContentType("text/html");
        response.getWriter().write(studentInfo);
    }
}
