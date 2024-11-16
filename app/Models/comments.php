<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class comments extends Model
{
    use HasFactory;
    protected $fillable = [
        'post_id',
        'user_id',
        'body',
        'created_at',
        'updated_at'
    ];
    public function comment(): BelongsTo{
        return $this->belongsTo(comments::class,'comment_id','comment_id');
    }
    public function user(): BelongsTo{
        return $this->belongsTo(users::class,'user_id','user_id');
    }
}
