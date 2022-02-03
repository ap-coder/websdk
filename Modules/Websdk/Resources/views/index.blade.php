<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <!-- Styles -->
    <link href="{{ asset('css/websdk.css') }}" rel="stylesheet">
</head>

<body>

    <!-- React root DOM -->
    <div id="codecorpdemo">
    </div>

    <!-- React JS -->
    <script src="{{ asset('js/websdk.js') }}" defer></script>

</body>
</html>