<?php

namespace App\Http\Controllers;
use App\Models\Message;

use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $sender = $request->input('sender');
        $recipient = $request->input('recipient');
        $message = $request->input('message');

        Message::create([
            'sender' => $sender,
            'recipient' => $recipient,
            'message' => $message,
        ]);

        return response()->json(['result' => 'Message stored successfully']);
    }

    public function getMessage(Request $request)
    {
        $parameter = $request->query('sender');

        $message = Message::where('sender', $parameter)->first();

        return $message;
    }
}
