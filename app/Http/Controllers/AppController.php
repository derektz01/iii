<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AppController extends Controller
{
  public function index() {
    return Inertia::render('App', ['language' => 'en', 'onSectionClick' => '']);
  }
}