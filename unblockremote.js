var body = $response.body;
body = '\/*\n@supported XXXXXX\n*\/\n' + body;

$done(body);
