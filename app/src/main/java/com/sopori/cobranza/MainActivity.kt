package com.sopori.cobranza

import android.os.Bundle
import androidx.activity.ComponentActivity
import android.content.Intent
import android.net.Uri

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Redirigir a la URL de la PWA si se abre como APK
        val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://ais-dev-6j6mdfqj2ybwlw743xmb6m-83692880014.us-east1.run.app"))
        startActivity(intent)
        finish()
    }
}
