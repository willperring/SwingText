<!DOCTYPE html>
<html>

    <head>

        <title>Swing PoC</title>

        <style>

            html, body {
                width: 100%;
                height: 100%;
                padding: 0;
                margin: 0;
            }

            html {
                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyYWRpYWxHcmFkaWVudCBpZD0iZyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYmNkZWUxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNGJhMWI5Ii8+PC9yYWRpYWxHcmFkaWVudD48cmVjdCB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM0YmExYjkiIC8+PHJlY3QgeD0iLTEyLjk5OTElIiB5PSItOTguMjgyNiUiIHdpZHRoPSIxMjUuOTk4MSUiIGhlaWdodD0iMjQ2LjU2NTMlIiBmaWxsPSJ1cmwoI2cpIiAvPjwvc3ZnPg==);
                background-image: -webkit-gradient(radial, 50% 25%, 0, 50% 25%, 143, color-stop(0%, #bcdee1), color-stop(100%, #4ba1b9));
                background-image: -webkit-radial-gradient(center 25%, farthest-corner circle, #bcdee1 0%, #4ba1b9 100%);
                background-image: -moz-radial-gradient(center 25%, farthest-corner circle, #bcdee1 0%, #4ba1b9 100%);
                background-image: -ms-radial-gradient(center 25%, farthest-corner circle, #bcdee1 0%, #4ba1b9 100%);
                background-image: -o-radial-gradient(center 25%, farthest-corner circle, #bcdee1 0%, #4ba1b9 100%);
                background-image: radial-gradient(farthest-corner circle at center 25%, #bcdee1 0%, #4ba1b9 100%);
            }

            #swingContainer {
                color: #fff;
                font-family: Arial, sans-serif;
                font-size: 70px;
                font-weight: bold;
                text-align: center;
                text-shadow: 2px 4px 4px rgba(0,0,0,0.4);
            }

        </style>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
        <script src="js/swing.js"></script>

    </head>

    <body>

        <div id="swingContainer">

        </div>

        <script>
            $('#swingContainer').swing('Why, hello There!', {});
        </script>

    </body>

</html>

