---
title: How To Setup A Test
description: Setup an A/B Test In Our System.
permalink: /guides/:slug
---


# How To Setup An A/B Test 

```php
 <?php
    displaytest(210);  // calls test and 193 = test id
    if(testGetVariation(210) == 436)   // do some stuff for on variation 436 = variation# 
    {  ?>
    <?php
    }
    ?>
```


```css
    /***------------------------------------------- Homepage Services -------------------------------------------***/

    #services {
        padding: 60px 0px 40px;
    }

    #services p {
        padding-left: 0.9375rem;
        padding-right: 0.9375rem;
    }

    #service-items-wrap {
        margin-top: 30px;
    }

    .service1,
    .service2,
    .service3 {
        background-image: url(https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/2528/srv-solar.jpg);
    }

    .service-title {
        padding: 9px 10px 17px;
        font-family: 'Archivo Black',
        'Exo 2',
        sans-serif;
        color: #39d52d;
        position: relative;
    }

    .service-title:before {
        content: '';
        position: absolute;
        border-bottom: 2px solid #39d52d;
        bottom: 0px;
        width: 60px;
        left: 50%;
        transform: translateX(-50%);
    }
    /* Service item box styles */

    .service-item {
        text-align: center;
        position: relative;
        margin-bottom: 10px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0px 0px rgba(43,
        43,
        43,
        0.5) inset;
        transition: all .3s ease;
        overflow: hidden;
        height: 240px;
    }

    .service-full:hover>.srv-title-bottom,
    .service-full:hover>.srv-title-bottom p {
        opacity: 0;
    }

    .service-item:hover~.srv-title-bottom {
        margin-top: -25px;
        pointer-events: none;
        z-index: -1;
    }

    .service-full:hover .service-text {
        display: block !important;
    }

    .srv-title-bottom {
        background: #39d52d;
        text-align: center;
        padding: 10px;
        height: 53px;
        transition: all .3s ease;
        opacity: 1;
        margin-bottom: 10px;
    }

    .srv-title-bottom p {
        color: #ffffff;
        text-shadow: 0px 1px 2px rgba(0,
        0,
        0,
        0.1);
        font-size: 22px;
        font-family: 'Archivo Black',
        sans-serif;
        opacity: 1;
        transition: all .3s ease-in-out;
    }

    .service-item a {
        display: block;
        height: 240px;
    }

    .service-item .srv-icon {
        opacity: 0;
        padding-top: 20px;
        transition: all .3s ease;
    }

    .srv-text {
        color: #fff;
        padding: 0px 10px;
        position: relative;
        bottom: -184px;
        transition: all .3s ease;
        opacity: 0;
    }

    .srv-text p.service-title {
        font-size: 20px;
        margin: 0px auto 20px;
        font-weight: 600;
    }

    .service-item p.description {
        line-height: 1.5rem;
        margin-bottom: 0;
        padding: 0px 0px 10px;
        opacity: 0;
        transition: opacity .2s ease;
        font-family: 'Exo 2', sans-serif;
    }

    .service-item p.description span {
        color: #39d52d;
        line-height: 2.4em;
        font-size: .9em;
    }

    .service-full:hover .service-item {
        box-shadow: 0px -350px rgba(43,
        43,
        43,
        0.65)inset,
        0 0 30px rgba(43,
        43,
        43,
        0.55);
        margin-top: 25px;
    }

    .service-full:hover .srv-icon {
        opacity: 1;
    }

    .service-full:hover .srv-text {
        top: 50%;
        transform: translateY(-50%);
        bottom: initial;
        opacity: 1;
    }

    .service-full:hover p.description {
        opacity: 1;
    }

    @media screen and (max-width:1024px) {
        .service-title {
            font-size: 20px;
        }
        .service6 {
            background-position: center top;
        }
    }

    @media screen and (min-width:641px) and (max-width:1024px) {
        .service-title {
            font-size: 18px !important;
            line-height: 19px !important;
        }
        .description {
            line-height: 1.1rem !important;
            font-size: 14px !important;
        }
        .srv-title-bottom {
            height: 60px;
            position: relative;
        }
        .srv-title-bottom p {
            line-height: 1.2em;
            font-size: 18px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,
            -50%);
        }
    }

    @media screen and (max-width:640px) {
        .service-item~.srv-title-bottom,
        .service-item~.srv-title-bottom p {
            opacity: 0;
            height: 0;
        }
        .service-full:hover>.srv-title-bottom {
            margin-top: 0;
        }
        .service-item .service-text {
            display: block !important;
        }
        .srv-title-bottom {
            background: #39d52d;
            text-align: center;
            padding: 0px;
            height: 53px;
            transition: all .3s ease;
            opacity: 1;
            margin-bottom: 0px;
        }
        .srv-title-bottom p {
            color: #ffffff;
            text-shadow: 0px 1px 2px rgba(0,
            0,
            0,
            0.1);
            font-size: 22px;
            font-family: 'Archivo Black',
            sans-serif;
            opacity: 1;
            transition: all .3s ease-in-out;
        }
        .service-item a {
            display: block;
            height: 240px;
        }
        .service-item .srv-icon {
            opacity: 0;
            padding-top: 20px;
            transition: all .3s ease;
        }
        .srv-text {
            color: #fff;
            padding: 0px 10px;
            position: relative;
            bottom: -184px;
            transition: all .3s ease;
            opacity: 0;
        }
        .srv-text p.service-title {
            font-size: 20px;
            margin: 0px auto 20px;
            font-weight: 600;
        }
        .service-item p.description {
            line-height: 1.5rem;
            margin-bottom: 0;
            padding: 0px 0px 10px;
            opacity: 0;
            transition: opacity .2s ease;
        }
        .service-item p.description span {
            color: #39d52d;
            line-height: 2.4em;
            font-size: .9em;
        }
        .service-item {
            box-shadow: 0px -350px rgba(43,
            43,
            43,
            0.65)inset,
            0 0 30px rgba(43,
            43,
            43,
            0.55);
            margin-top: 0px;
        }
        .service-full:hover .service-item {
            margin-top: 0px !important;
        }
        .service-item .srv-icon {
            opacity: 1;
        }
        .service-item .srv-text {
            top: 50%;
            transform: translateY(-50%);
            bottom: initial;
            opacity: 1;
        }
        .service-item p.description {
            opacity: 1;
        }
        .service-title {
            padding: 0px 0px 10px !important;
            font-size: 17px !important;
        }
        .srv-title-bottom {
            position: relative;
        }
        .srv-title-bottom p {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,
            -50%);
        }
    }
```

```html
<link href="https://fonts.googleapis.com/css?family=Archivo+Black|Exo+2:400,400i,700" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/foundation.min.js"></script>

<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/css/foundation.min.css">

<meta name="viewport" content="width=device-width, initial-scale=1">
<div class="container" id="services">
    <div class="row" data-equalizer>
        <div class="small-12 medium-4 columns">
            <div class="service-full">
                <div class="service-item service1">
                    <a href="#">
                        <div class="srv-text">
                            <p class="service-title">Service 1</p>
                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                <br>
                                <span>Learn More >></span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="srv-title-bottom">
                    <p>Service 1</p>
                </div>
            </div>
        </div>
        <div class="small-12 medium-4 columns">
            <div class="service-full">
                <div class="service-item service2">
                    <a href="#">
                        <div class="srv-text">
                            <p class="service-title">Service 2</p>
                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                <br>
                                <span>Learn More >></span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="srv-title-bottom">
                    <p>Service 2</p>
                </div>
            </div>
        </div>
        <div class="small-12 medium-4 columns">
            <div class="service-full">
                <div class="service-item service3">
                    <a href="#">
                        <div class="srv-text">
                            <p class="service-title">Service 3</p>
                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                <br>
                                <span>Learn More >></span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="srv-title-bottom">
                    <p>Service 3</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

 
