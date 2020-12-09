<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectsController extends Controller
{
    public function index() {
        $projects= Project::all();
        return $projects->toJson();
    }
    
    public function create(Request $data){
        $project= Project::create([
            'name'=> $data['name']
        ]);
        
        return response()->json('Project created successfully');
    }
}
