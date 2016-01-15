<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Worklist</title>

	<!-- Bootstrapping UI5 -->
	<script id="sap-ui-bootstrap"
			src='https://openui5.hana.ondemand.com/resources/sap-ui-core.js'
			data-sap-ui-libs="sap.m"
			data-sap-ui-theme="sap_bluecrystal"
			data-sap-ui-compatVersion="edge"
			data-sap-ui-resourceroots='{"sap.ui.demo.worklist": "<c:url value='/resources/'/>" 
			}'
			data-sap-ui-frameOptions='allow'> 	// NON-SECURE setting for testing environment
	</script>

	<script>
		sap.ui.getCore().attachInit(function () {
			sap.ui.require([
				"sap/ui/demo/worklist/localService/mockserver",
				"sap/m/Shell",
				"sap/ui/core/ComponentContainer"
			], function (server, Shell, ComponentContainer) {
				// set up test service for local testing
				server.init();
				// initialize the UI component
				new Shell({
					app: new ComponentContainer({
						height : "100%",
						name : "sap.ui.demo.worklist"
					})
				}).placeAt("content");
			});
		});
	</script>

</head>

<!-- UI Content -->
<body class="sapUiBody" id="content">
</body>
</html>