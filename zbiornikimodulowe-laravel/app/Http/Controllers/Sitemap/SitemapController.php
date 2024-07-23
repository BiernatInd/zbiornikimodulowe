<?php

namespace App\Http\Controllers\Sitemap;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog\ListaWpisow;
use App\Models\Produkty\Produkty;

class SitemapController extends Controller
{
    public function generate()
    {
        $xml = new \XMLWriter();
        $xml->openMemory();
        $xml->setIndent(true);
        $xml->startDocument('1.0', 'UTF-8');
        $xml->startElement('urlset');
        $xml->writeAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

        // Dodaj statyczne ścieżki
        $staticRoutes = [
            '/' => 'monthly',
            '/price' => 'monthly',
            '/policy-privacy' => 'monthly',
        ];

        foreach ($staticRoutes as $path => $changefreq) {
            $this->addUrl($xml, 'https://zbiornikimodulowe.pl' . $path, '2023-10-10T00:00:00+00:00', $changefreq, 0.8);
        }

        $xml->endElement();
        $xmlContent = $xml->outputMemory();

        return response($xmlContent)->header('Content-Type', 'text/xml');
    }

    private function addUrl(\XMLWriter $xml, $loc, $lastmod, $changefreq, $priority)
    {
        $xml->startElement('url');
        $xml->writeElement('loc', $loc);
        $xml->writeElement('lastmod', $lastmod);
        $xml->writeElement('changefreq', $changefreq);
        $xml->writeElement('priority', $priority);
        $xml->endElement();
    }
}
