<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::view('/{path?}', 'layouts.app');

Route::get('/projects', 'App\Http\Controllers\ProjectsController@index');
Route::post('/projects/create', 'App\Http\Controllers\ProjectsController@create');
Route::get('/tasks', 'TasksController@index');