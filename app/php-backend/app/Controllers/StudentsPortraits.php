<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class StudentsPortraits extends ResourceController
{
    protected $modelName = 'App\Models\StudentsPortraitsModel';

    public function show($studentId = null)
    {
        try {
            if (!$studentId) {
                return $this->failValidationError('Invalid student ID');
            }

            $portrait = $this->model->where('student_id', $studentId)->first();
            if (!$portrait) {
                return $this->failNotFound('Portrait not found for this student');
            }

            $filepath = $portrait['filepath'];
            if (!file_exists($filepath)) {
                return $this->failServerError('File not found');
            }

            $mime = mime_content_type($filepath);
            header('Access-Control-Allow-Origin: *');
            header('Content-Type: ' . $mime);
            header('Content-Length: ' . filesize($filepath));
            readfile($filepath);
            exit();
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }

    public function update($studentId = null)
    {
        try {
            $existingPortrait = $this->model->where('student_id', $studentId)
                                            ->first();
            if ($existingPortrait) {
                unlink($existingPortrait['filepath']);
            }

            $validationRules = [
                'portrait' => [
                    'uploaded[portrait]',
                    'is_image[portrait]',
                    'max_size[portrait,1024]',
                    'max_dims[portrait,1024,1024]',
                ],
            ];
            if (!$this->validate($validationRules)) {
                return $this->failValidationError($this->validator->getErrors());
            }

            $portrait = $this->request->getFile('portrait');
            if (!$portrait->isValid() || $portrait === null) {
                return $this->failValidationError('No valid file uploaded');
            }

            $filename = $portrait->getRandomName();
            $filepath = WRITEPATH . 'uploads/' . $filename;

            $imgLib = \Config\Services::image('gd');
            if (!$imgLib->withFile($portrait)
                        ->fit(500, 500)
                        ->save($filepath)
            ) {
                return $this->failServerError($imageLib->getError());
            }

            $data = [
                'student_id' => $studentId,
                'filename'   => $filename,
                'filepath'   => $filepath,
            ];
            if ($existingPortrait) {
                $this->model->update($existingPortrait['id'], $data);
            } else {
                $this->model->insert($data);
            }
            return $this->respond([
                'message' => 'Portrait uploaded/updated successfully'
            ]);
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }

    public function delete($studentId = null)
    {
        try {
            if (!$studentId) {
                return $this->failValidationError('Invalid student ID');
            }

            $portrait = $this->model->where('student_id', $studentId)->first();
            if (!$portrait) {
                return $this->failNotFound('Portrait not found for this student');
            }
            unlink($portrait['filepath']);
            $this->model->where('student_id', $studentId)->delete();
            $response = [
                'status'    => 200,
                'details'   => ['id' => $portrait['id']],
                'message'   => 'Portrait deleted successfully',
            ];
            return $this->respondDeleted($response);
        } catch (Exception $e) {
            return $this->fail($e->getMessage());
        }
    }
}
