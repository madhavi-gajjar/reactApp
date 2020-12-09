<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Project extends Model
{
    use HasFactory;
    
    private $validator;
    
    protected $table= 'projects';
    
    protected $fillable= ['name'];
    
    public function __construct(array $attributes= []){
        parent::__construct($attributes);
    }
    
    public function tasks(){
        return $this->hasMany(Task::class);
    }
    
}
