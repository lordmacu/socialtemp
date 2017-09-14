<?php

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

 Route::group(['middleware' => 'auth'], function () {

        Route::get('/', 'HomeController@index')->name('home');
        Route::get('/prueba', 'HomeController@prueba')->name('prueba');


Route::get('/paginateWallHome', 'HomeController@paginateWallHome')->name('paginateWallHome');
Route::get('/populateDatabase', 'HomeController@populateDatabase')->name('populateDatabase');
Route::get('/profile/{id}', 'ProfileController@index')->name('profile');
Route::get('/profile/{id}/edit', 'ProfileController@editProfile')->name('editProfile');
Route::post('/profile/{id}/edit', 'ProfileController@udpateProfile')->name('updateProfile');
Route::get('/paginateWallProfile/{id}', 'ProfileController@paginateWallProfile')->name('paginateWallProfile');

Route::get('/searchUser/', 'CompanyController@searchUser')->name('searchUser');

 
 Route::get('/PopulatePost/', 'HomeController@PopulatePost')->name('PopulatePost');


Route::get('/company/{id}', 'CompanyController@index')->name('company');
Route::get('/company/{id}/wall', 'CompanyController@wall')->name('wallcompany');
Route::get('/PostToWall/', 'HomeController@PostToWall');
Route::get('/publicateVideos/', 'HomeController@publicateVideos');
Route::get('/getRemoteEmpty/', 'HomeController@getRemoteEmpty');
Route::get('/getRemoteEmptyById/', 'HomeController@getRemoteEmptyById');

 

 Route::group(['prefix'=>'blog','as'=>'blog.'], function(){
    Route::get('/company/{id}/post/{post}', 'BlogController@blogPost')->name('blogpost');
    Route::get('/company/{id}/blog/', 'BlogController@blog')->name('blogcompany');
    Route::any('/uploadImage', 'BlogController@uploadImage')->name('uploadImage');
    Route::get('/moreposts/{id}', 'BlogController@moreBlogPost')->name('moreBlogPost');
    Route::get('/company/{id}/create', 'BlogController@create')->name('createPost');
    Route::get('/company/{id}/edit/{post}', 'BlogController@edit')->name('editPost');
    Route::post('/company/{id}/save', 'BlogController@save')->name('savePost');
    Route::post('/company/{id}/edit', 'BlogController@update')->name('udpatePost');
    Route::get('/company/{id}/delete/{post}', 'BlogController@delete')->name('deletePost'); 
 });
 

 Route::any('/uploadImage/', 'FileManagerController@uploadImage')->name('uploadImage');
 Route::get('/paginateMedia/', 'FileManagerController@paginateMedia')->name('paginateMedia');
 Route::get('/search/', 'SearchController@index')->name('search');

 Route::post('/publishPost', 'WallController@publish')->name('publish_post');
Route::post('/comment', 'CommentController@comment')->name('comment');
Route::get('/lessComments', 'CommentController@lessComments')->name('lessComments');
Route::post('/like', 'LikeController@like')->name('like');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


       });

Route::any('/call', 'HomeController@call')->name('call');

Route::get('/logout', 'HomeController@logout')->name('logout');
Route::post('/loginAttempt', 'HomeController@loginAttempt')->name('loginAttempt');
Route::get('/loginPlatform', 'HomeController@login')->name('loginPlatform');
Route::get('/processCsv', 'HomeController@processCsv')->name('processCsv');

 
Route::get('/grupos', function () {
    return view('groups');
});

Route::get('/calendario', function () {
    return view('calendar');
});


Route::get('/cumples', function () {
    return view('birthday');
});



Route::get('/innovacion', function () {
    return view('innovacion');
})->name('innovacion');





Route::get('/timesheet', function () {
    return view('timesheet');
});

