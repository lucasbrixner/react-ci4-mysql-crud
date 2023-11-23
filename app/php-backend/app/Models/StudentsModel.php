<?php

namespace App\Models;

use CodeIgniter\Model;

class StudentsModel extends Model
{
    protected $table            = 'students';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'given_name',
        'surname',
        'email',
        'phone',
        'address_1',
        'address_2',
        'city',
        'state_code',
        'zip_code',
    ];

    // Dates
    protected $useTimestamps = true;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [
        'given_name' => 'required|max_length[32]',
        'surname'    => 'required|max_length[32]',
        'email'      => 'required|max_length[40]|valid_email',
        'phone'      => 'required|regex_match[/^\+55\s\d{2}\s(?:9\s)?\d{4}\s\d{4}$/]',
        'address_1'  => 'required|max_length[64]',
        'address_2'  => 'if_exist|max_length[64]',
        'city'       => 'required|max_length[32]',
        'state_code' => 'required|exact_length[2]',
        'zip_code'   => 'required|regex_match[/^\d{5}-\d{3}$/]',
    ];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];

}
