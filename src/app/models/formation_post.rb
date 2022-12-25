class FormationPost < ApplicationRecord
    belongs_to :user
    has_one_attached :formation_image

    def attach_blob(image_data_url)
        image_blob = ImageBlob.new(image_data_url)
        image.attach(
        io: image_blob.to_io,
        filename: Time.zone.now,
        content_type: image_blob.mime_type #content_typeは無くてもOK
        )
    end
end
