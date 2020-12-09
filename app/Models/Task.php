<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Validator;

class Task extends Model
{
    use HasFactory;
    
    private $validator;
    
    protected $table= 'tasks';
    
    protected $fillable= ['title', 'description', 'completed', 'user_id', 'project_id'];
    
    public function __construct(array $attributes= []){
        parent::construct($attributes);
    }
    
    public function users(){
        return $this->belongsTo(User::class);
    }
    
    public function project(){
        return $this->belongsTo(Project::class);
    }
}
