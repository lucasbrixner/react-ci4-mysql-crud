<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->options('(:any)', 'Home::index');
$routes->group('api/students', function ($routes) {
    $routes->get('(:segment)/portrait', 'StudentsPortraits::show/$1');
    $routes->post('(:segment)/portrait', 'StudentsPortraits::update/$1');
    $routes->delete('(:segment)/portrait', 'StudentsPortraits::delete/$1');
});
$routes->resource('api/students', ['controller' => 'Students']);
$routes->resource(
    'api/users',
    ['controller' => 'Users', 'only' => ['index', 'create']]
);