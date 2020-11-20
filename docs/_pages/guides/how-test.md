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