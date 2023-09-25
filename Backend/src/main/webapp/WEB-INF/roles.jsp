<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Roles</title>
</head>
<body>
	<form:form method="POST" action="/role" modelAttribute="role">
		<p>
			<form:label path="name">Add Role:</form:label>
			<form:input path="name" />
		</p>
		
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>