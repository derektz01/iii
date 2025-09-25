<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class LandingPageController extends Controller
{
  public function index() {
    return Inertia::render('LandingPage', ['language' => 'en', 'onSectionClick' => '']);
  }
}