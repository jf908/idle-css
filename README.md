# Idle

## A super simple CSS library.

Idle is designed to be a simple CSS library that you can drop in to start with some alright looks.

Idle is not layout-focused like many other libraries and if that's something you are looking for then you can go use one of the many available.
That said, Idle provides minimal layout functionality for very basic use cases. 
One great option is to use Idle for apperance and write your own CSS for laying things out.

Idle is very much a work in progress so any reports of common use cases where Idle messes up are greatly appreciated.

## Getting Started

[Download the latest release](https://github.com/jf908/idle-css/releases)

To learn how to use it, check out [the showcase](https://jf908.github.io/idle-css/). You may start with this very basic boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/idle.min.css">
  <title>Title</title>
</head>
<body>
  <nav>
    <div class="container">
      <div class="brand">Title</div>
    </div>
  </nav>
  <div class="container">
    <h2>  
      Welcome to Idle!
    </h2>
    <div class="card">
      You can put whatever you want in here!
    </div>
  </div>
</body>
</html>
```

## Building

Requirements:

* node.js
* Running `npm install`

You can build the scss using

```npm run build```

and your css will be put in css/.

Idle has many variables in scss/general.scss that you may want to customize yourself.