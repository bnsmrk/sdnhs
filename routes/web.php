<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::resource('tasks', TaskController::class)
    ->middleware(['auth', 'role:teacher']);

Route::resource('students', StudentController::class)
    ->middleware(['auth', 'role:admin']);

Route::resource('tasks', TeacherController::class)
    ->middleware(['auth', 'role:admin']);

Route::resource('course', CourseController::class)
    ->middleware(['auth', 'role:admin']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
