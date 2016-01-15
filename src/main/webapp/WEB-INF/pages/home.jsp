<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>

<html lang="en">
<head>
    
    
    <link href="<c:url value="/resources/css/main.css" />" rel="stylesheet">
   
    
    
    <script
            id="sap-ui-bootstrap"
            src='https://openui5.hana.ondemand.com/resources/sap-ui-core.js'
            data-sap-ui-theme="sap_bluecrystal"
            data-sap-ui-libs="sap.m"
            data-sap-ui-bindingSyntax="complex"
            data-sap-ui-compatVersion="edge"
            data-sap-ui-preload="async"
            data-sap-ui-resourceroots='{
                "sapUInamespace":  "<c:url value='/resources/'/>"
            }'>
    </script>
    
     <script src="<c:url value="/resources/js/controller.js" />"></script>


</head>
<body>
<%--class="sapUiBody"--%>
<div id="content">

</div>

<div id="edit">
</div>

</body>
</html>